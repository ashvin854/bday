// api/message.js
module.exports = (req, res) => {
    const targetDate = new Date('July 24, 2025 00:00:00 IST'); // Ensure IST conversion for the server
    const now = new Date();

    if (now >= targetDate) {
        res.status(200).json({
            success: true,
            message: `
                <strong>Happy Birthday baaa! ❤️💕</strong>
                <p>
                    I wish this year brings you a lot of happiness, joy and lots of good memories.
                    There is more when you click those links hehe.. toh idhar itna hi likhta hu baaki udhar padh lena meri buddhu.
                </p>
                <ul class="links">
                    <li><a href="1stBday/index.html" target="_self">1st Birthday</a></li>
                    <li><a href="2ndBday/index.html" target="_self">2nd Birthday</a></li>
                </ul>
                <style>
                    .links {
                        list-style: none;
                        padding: 0;
                        margin: 20px 0;
                        display: flex;
                        justify-content: center;
                        gap: 20px;
                    }
                    .links li a {
                        display: inline-block;
                        padding: 10px 20px;
                        background: #ff6b6b;
                        color: white;
                        text-decoration: none;
                        border-radius: 30px;
                        transition: all 0.3s ease;
                        font-weight: bold;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }
                    .links li a:hover {
                        background: #ff8e8e;
                        transform: translateY(-2px);
                        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
                    }
                </style>
            `
        });
    } else {
        res.status(403).json({
            success: false,
            message: "Content not yet available."
        });
    }
};