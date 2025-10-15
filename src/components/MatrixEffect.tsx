import Script from "next/script";

const styles = {
    container: "absolute inset-0 z-0",
	canvas: "w-full h-full",
}

export default function MatrixEffect() {
	return (
		<div className={styles.container}>
		<canvas className={styles.canvas} id="code-rain" width="720" height="480"></canvas>

		<Script id="code-rain-script" strategy="afterInteractive">{`
			const canvas = document.getElementById('code-rain');
			const ctx = canvas.getContext('2d');
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;
			ctx.font = '26px monospace';
			ctx.textBaseline = 'top';

			const lines = [
				"for (let i = 0; i < items.length; i++) { processItem(items[i]); }",
				"const config = { theme: 'dark', layout: 'grid', showSidebar: true };",
				"try { await saveToDatabase(data); } catch(e) { console.error(e); }",
				"document.querySelectorAll('.button').forEach(btn => btn.addEventListener('click', handleClick));",
				"setTimeout(() => console.log('Delayed log'), 2000);",
				"const result = array.map(x => x * 2).filter(x => x > 5);",
				"if (!session.isValid()) { redirectToLogin(); } else { initializeApp(); }"
			];

			// Tres oleadas con velocidad y posición independiente
			const waves = [
			{ currentLine: 0, charIndex: 0, y: 30, delay: 0, speed: 1 },
			{ currentLine: 4, charIndex: 0, y: 200, delay: 0, speed: 1 },
			{ currentLine: 6, charIndex: 0, y: 340, delay: 0, speed: 1 }
			];

			// Buffer de caracteres activos con alpha
			const activeChars = [];

			function draw() {
			// Limpiar canvas transparente
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Actualizar oleadas
			waves.forEach((wave) => {
				if (wave.delay > 0) {
				wave.delay--;
				return;
				}

				if (!wave.frameCounter) wave.frameCounter = 0;
				wave.frameCounter++;

				// Control de velocidad de escritura
				if (wave.frameCounter % Math.ceil(3 / wave.speed) === 0) {
				const text = lines[wave.currentLine].slice(0, wave.charIndex);
				activeChars.push({
					text: "> " + text,
					x: 20,
					y: wave.y,
					color: '#181A21',
					alpha: 0.3 // semi-transparente
				});
				wave.charIndex++;
				}

				// Cuando la línea termina, pasar a la siguiente
				if (wave.charIndex > lines[wave.currentLine].length) {
				wave.charIndex = 0;
				wave.y += 26;
				wave.currentLine = (wave.currentLine + 1) % lines.length;
				if (wave.y > canvas.height - 30) wave.y = 30;
				}
			});

			// Dibujar todos los caracteres activos con fade-out suave
			for (let i = activeChars.length - 1; i >= 0; i--) {
				const c = activeChars[i];
				ctx.fillStyle = c.color;
				ctx.globalAlpha = c.alpha;
				ctx.fillText(c.text, c.x, c.y);

				c.alpha -= 0.005; // fade-out muy suave para evitar titilar

				if (c.alpha <= 0) {
				activeChars.splice(i, 1); // eliminar cuando invisible
				}
			}

			ctx.globalAlpha = 1; // reset alpha
			requestAnimationFrame(draw);
			}

			draw();
		`}</Script>
		</div>
	);
}


