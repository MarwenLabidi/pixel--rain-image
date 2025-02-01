<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marwen Labidi - Portfolio</title>
    <style>
        /* General body styling */
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f4f4f9;
            font-family: 'Poppins', sans-serif;
            color: #333;
        }

        /* Container for the content */
        .container {
            width: 60%;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
        }

        /* Typing animation container */
        #typingAnimation {
            font-size: 18px;
            line-height: 1.6;
            white-space: pre-wrap;
            overflow: hidden;
            border-right: 2px solid #333;
            animation: blink-caret 0.75s step-end infinite;
            text-align: left;
            margin-bottom: 20px;
        }

        /* Blinking cursor animation */
        @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: #333; }
        }

        /* Links container */
        .links {
            display: flex;
            justify-content: center;
            gap: 25px;
            margin-top: 20px;
            flex-wrap: wrap;
        }

        /* Individual link styling */
        .link {
            display: flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
            font-size: 24px;
            font-weight: 600;
            background: linear-gradient(90deg, #2196F3, #4CAF50);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            transition: transform 0.3s ease;
        }

        .link:hover {
            transform: scale(1.1);
        }

        /* Download message styling */
        #downloadMessage {
            background-color: #2196F3;
            color: white;
            padding: 15px;
            text-align: center;
            font-size: 18px;
            border-radius: 5px;
            margin-top: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            display: none;
            position: relative;
        }

        /* Loader animation */
        .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
            display: inline-block;
            margin-right: 10px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Style for the "Done" state */
        #downloadMessage.done {
            background-color: #4CAF50;
        }

        /* Style to initially hide the iframe */
        #pdfIframe {
            display: none;
            width: 80%;
            height: 600px;
            margin-top: 20px;
            border: none;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        /* Import Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
    </style>
</head>
<body>
    <div class="container">
        <div id="typingAnimation"></div>
        <div class="links">
            <a href="https://linktr.ee/marwenlabidi" class="link" target="_blank">
                🌐 Linktree
            </a>
            <a href="https://www.linkedin.com/in/marwenlabidi/" class="link" target="_blank">
                🔗 LinkedIn
            </a>
            <a href="https://github.com/MarwenLabidi" class="link" target="_blank">
                🐙 GitHub
            </a>
            <a href="mailto:marwenlabidi.dev@gmail.com" class="link">
                ✉️ Email
            </a>
            <a href="tel:+21623432113" class="link">
                📞 Phone
            </a>
        </div>
        <p id="downloadMessage" class="download-message">
            <span class="loader"></span> Downloading resume...
        </p>
        <iframe id="pdfIframe" src="https://raw.githubusercontent.com/MarwenLabidi/resume/main/senior-front-end-developer-resume-marwen.pdf" width="100%" height="600px"></iframe>
    </div>

    <script>
        const text = `My name is Marwen Labidi, and I’m a Senior Front-end Developer with 5 years of experience specializing in React.js and modern JavaScript frameworks. I’ve worked on a variety of projects, including building UI libraries, micro front-end architectures, and optimizing performance using PWA and caching techniques. I’m passionate about creating scalable, user-friendly applications and have experience leading small teams in Agile environments. Outside of work, I enjoy staying updated with the latest front-end technologies and occasionally teaching React to aspiring developers.`;
        const typingAnimation = document.getElementById('typingAnimation');

        // Function to simulate typing effect
        function typeText() {
            let i = 0;
            const speed = 30; // Adjust typing speed here

            function type() {
                if (i < text.length) {
                    typingAnimation.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }

            type();
        }

        // Start typing animation
        typeText();

        // Show the download message immediately
        const downloadMessage = document.getElementById('downloadMessage');
        downloadMessage.style.display = 'block';

        // Simulate the download process
        setTimeout(function() {
            // Change the message and color to "Done" and green
            downloadMessage.innerHTML = 'Done!'; // Update the message
            downloadMessage.classList.add('done'); // Change the background color to green

            // Hide the loader
            const loader = document.querySelector('.loader');
            loader.style.display = 'none';

            // Show the iframe after the download is complete
            document.getElementById('pdfIframe').style.display = 'block';
        }, 3000); // Simulate a 3-second download process
    </script>
</body>
</html>
