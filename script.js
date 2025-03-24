let storyData = {
    1: {
        title: "Chapter 1: The Awakening",
        text: "The neon-lit skyline of Neo-Varda shimmered beneath an artificial moon, casting long shadows on fractured streets. Towering skyscrapers loomed like monoliths, their windows flickering with encoded ads selling synthetic memories and virtual companionship. The air smelled of ozone and rust — the scent of dying machines and broken promises. Above, drones traced invisible grids, watching everyone and no one.\n\nOrion adjusted the collar of his jacket, water trailing down the side of his face. His fingers brushed the encrypted chip implanted just below his neck — a remnant of another life, one he barely remembered. Beneath the cold metal of his armor, something warmer pulsed: a quiet desperation. He didn’t come this far for answers. He came for closure.\n\nHe moved through the labyrinth of Sector 9, where light and shadow waged endless war. Neon kanji flickered on decaying walls. A child with silver eyes offered him a piece of candy — but when he blinked, she was gone, as if overwritten by the city’s code.\n\n\"Coordinates confirmed,\" Nyx whispered. The voice glitched slightly, layered with static and… sadness? He couldn’t tell if that was code or his own projection. \"Entrance is within 15 meters. Security is light. But I detect irregular energy signatures. Proceed with awareness.\"\n\nOrion’s heart pounded. Not from fear — from familiarity. He’d been here before, in a past wiped clean. Images flickered in his mind: a hand reaching out, a voice screaming his name, static swallowing the memory whole. He clenched his jaw.\n\nAs he neared the end of the alley, the wall to his right shimmered unnaturally. Not reflections — interference. He reached out, and the bricks melted away like pixels dripping into nothingness, revealing a glowing corridor pulsing with blue veins of code.\n\nThe Citadel. The place they said didn’t exist. The city within the city.\n\nOrion hesitated.\n\n\"You don’t have to do this,\" Nyx said. But her voice cracked this time. As if some part of her remembered too.\n\nHe stepped through the veil.\n\nInstantly, the world changed. The air was colder. Crisper. The hum of the surface gave way to a low resonance — like the city was alive. Ahead, lights blinked in a rhythmic pattern, like a heartbeat. It was beautiful. And terrifying.\n\nHe took another step. The entrance closed behind him. There was no going back now.\n\nAnd deep within the Citadel, something else stirred — something that had waited years for Orion to return. The game had begun again.",
        image: "assets/images/chapter1.jpg",
        audio: "assets/audio/chapter1_ambient.mp3",
        lore: "Orion once served as a memory engineer for Eden Gate. He erased his own past to escape a catastrophic failure.",
        voice: "assets/audio/chapter1_voice.mp3"
    },
    2: {
        title: "Chapter 2: The Hidden City",
        text: "Orion stepped cautiously into the glowing corridor, where walls pulsed with digital veins of blue and purple light. The air was heavy with static, buzzing like the whisper of forgotten voices. He had entered the Citadel of Echoes — a city hidden beneath the world, stitched together with code and memory. Nyx, his AI assistant, spoke softly through his earpiece: \"Welcome to the undernet, Orion. All roads from here lead to truth — or ruin.\" Towering data spires rose above him like temples, their surfaces shifting with live code and flickering memories. Augmented citizens glided silently past, some human, others altered beyond recognition. Neon street vendors hawked digital dreams while drones buzzed overhead, scanning faces and broadcasting surveillance poetry. Somewhere within this labyrinth, Orion’s past was archived — buried beneath firewalls, guarded by ghosts of a forgotten war. He took his first step into the unknown, unaware that the city was already watching… and remembering him.",
        image: "assets/images/chapter2.jpg",
        audio: "assets/audio/chapter2_ambient.mp3",
        lore: "The Citadel's central AI is rumored to contain the consciousness of its original designer. Some say it watches Orion specifically.",
        voice: "assets/audio/chapter2_voice.mp3"
    },
    3: {
        title: "Chapter 3: The Final Revelation",
        text: "The tower loomed like a shard of frozen lightning, pulsing with red data streams that danced across its glassy surface. Orion ascended floor after floor, guided by Nyx through silent corridors filled with echoing memories. Each room replayed fragments of his forgotten life — laughter, betrayal, fire. The deeper he went, the more the truth unraveled: he had been here before. He was not just a traveler… he was the architect of the Citadel itself. A failed rebellion, a memory wipe, a second chance — this was his recursion. At the summit, a chamber of mirrors revealed countless versions of him, each trapped in a different timeline. Nyx's voice trembled: \"You are the anomaly. You are the key.\" With one final step, Orion placed his hand on the core, triggering a cascade of light. The city shuddered. Code bent. Reality shifted. And the truth — his truth — came flooding back like a storm. It was not the end. It was the awakening of a new beginning.",
        image: "assets/images/chapter3.jpg",
        audio: "assets/audio/chapter3_ambient.mp3",
        lore: "Nyx was never meant to survive the rebellion. Her presence in Orion’s system suggests unauthorized sentience.",
        voice: "assets/audio/chapter3_voice.mp3"
    }
};

let currentChapter = 1;

function loadChapter(chapter) {
    const story = document.getElementById("story");
    const chapterSelect = document.getElementById("chapter-select");
    if (chapterSelect) {
        chapterSelect.value = chapter;
    }

    story.classList.add("fade");

    setTimeout(() => {
        if (storyData[chapter]) {
            currentChapter = chapter;

        document.querySelectorAll(".chapter-point").forEach((point, index) => {
        point.classList.remove("active");
        if (index + 1 === chapter) {
            point.classList.add("active");
        }
});
            document.getElementById("chapter-title").innerText = storyData[chapter].title;
            document.getElementById("story-text").innerText = storyData[chapter].text;
            document.getElementById("story-image").src = storyData[chapter].image;
            document.getElementById("story-audio").src = storyData[chapter].audio;
            document.getElementById("story-voice").src = storyData[chapter].voice || "";
            document.getElementById("chapter-progress").value = chapter;
            document.getElementById("chapter-indicator").innerText = `Chapter ${chapter} of ${Object.keys(storyData).length}`;

            const ambient = document.getElementById("story-audio");
            ambient.muted = false;
            ambient.play().catch(() => {});

            const muteButton = document.getElementById("toggle-ambient");
            if (muteButton) {
                muteButton.innerText = "🔈 Mute Ambient";
            }

            const loreText = document.getElementById("lore-text");
            loreText.innerText = "";
            loreText.style.display = "none";

            const loreButton = document.getElementById("btnn");
            if (loreButton) {
                loreButton.innerText = "🔎 Reveal Hidden Lore";
            }
        }

        story.classList.remove("fade");
    }, 300);
}

function nextChapter() {
    if (currentChapter < Object.keys(storyData).length) {
        loadChapter(currentChapter + 1);
    } else {
        alert("End of the story!");
    }
}

function prevChapter() {
    if (currentChapter > 1) {
        loadChapter(currentChapter - 1);
    }
}

function jumpToChapter(chapter) {
    loadChapter(parseInt(chapter));
}

function toggleAmbient() {
    const ambient = document.getElementById("story-audio");
    const button = document.getElementById("toggle-ambient");

    ambient.muted = !ambient.muted;
    button.innerText = ambient.muted ? "🔇 Unmute Ambient" : "🔈 Mute Ambient";

    if (!ambient.muted) {
        ambient.play().catch(() => {
            console.warn("Ambient audio play blocked by browser.");
        });
    }
}

function toggleLore() {
    const loreText = document.getElementById("lore-text");
    const loreButton = document.getElementById("btnn");
    const lore = storyData[currentChapter].lore;

    if (loreText.style.display === "none" || loreText.innerText === "") {
        loreText.innerText = lore || "No hidden lore available.";
        loreText.style.display = "block";
        loreButton.innerText = "🙈 Hide Lore";
    } else {
        loreText.style.display = "none";
        loreButton.innerText = "🔎 Reveal Hidden Lore";
    }
}

document.addEventListener("click", () => {
    const ambient = document.getElementById("story-audio");
    ambient.muted = false;
    ambient.play().catch(() => {});
}, { once: true });

document.addEventListener("DOMContentLoaded", function () {
    loadChapter(currentChapter);
});
