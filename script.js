        const colors = [
            '#2196f3',
            '#e91e63',
            '#ffeb3b',
            '#74ff1d'
        ]

        function createPaper() {
            const section = document.querySelector("section");
            const paper = document.createElement("i");
            let ini = document.querySelectorAll("i");
            for (var i = 0; i < ini.length; i++) {
                ini[i].classList.add("fa-solid");
                ini[i].classList.add("fa-hand")
            }

            var size = Math.random() * 50;

            paper.style.fontSize = 20 + size + 'px';

            paper.style.top = Math.random() * innerHeight + 'px';
            paper.style.left = Math.random() * innerWidth + 'px';

            const bg = colors[Math.floor(Math.random() * colors.length)];
            paper.style.color = bg;
            paper.style.textShadow = `0px 0px 15px ${bg}`;

            section.appendChild(paper);

            setTimeout(() => {
                paper.remove()
            }, 5000)

        }
        setInterval(createPaper, 150);

        function createRock() {
            const section = document.querySelector("section");
            const rock = document.createElement("span");
            let ini = document.querySelectorAll("span");
            for (var i = 0; i < ini.length; i++) {
                ini[i].classList.add("fa-solid");
                ini[i].classList.add("fa-hand-back-fist")
            }

            var size = Math.random() * 50;

            rock.style.fontSize = 20 + size + 'px';

            rock.style.top = Math.random() * innerHeight + 'px';
            rock.style.left = Math.random() * innerWidth + 'px';

            const bg = colors[Math.floor(Math.random() * colors.length)];
            rock.style.color = bg;
            rock.style.textShadow = `0px 0px 15px ${bg}`;

            section.appendChild(rock);

            setTimeout(() => {
                rock.remove()
            }, 5000)

        }

        setInterval(createRock, 150);

        function createScissor() {
            const section = document.querySelector("section");
            const scissor = document.createElement("p");
            let ini = document.querySelectorAll("p");
            for (var i = 0; i < ini.length; i++) {
                ini[i].classList.add("fa-solid");
                ini[i].classList.add("fa-hand-peace")
            }

            var size = Math.random() * 50;

            scissor.style.fontSize = 20 + size + 'px';

            scissor.style.top = Math.random() * innerHeight + 'px';
            scissor.style.left = Math.random() * innerWidth + 'px';

            const bg = colors[Math.floor(Math.random() * colors.length)];
            scissor.style.color = bg;
            scissor.style.textShadow = `0px 0px 15px ${bg}`;

            section.appendChild(scissor);

            setTimeout(() => {
                scissor.remove()
            }, 5000)

        }

        setInterval(createScissor, 150);