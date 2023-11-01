<template>
    <div class="font-archivo">
        <div class="h-[calc(100vh-5rem)] table w-full">
            <span class="table-cell h-auto align-middle w-full">
                <span class="inline-block text-normal w-full text-center mb-40">
                    <h1 class="text-7xl font-comfortaa">Oscar Coghlan</h1> 
                    <br>
                    <p class="text-lg">Aspiring software developer</p>
                    <a href="#about" class="hover:text-gray-500 underline">learn more</a>
                </span>
            </span>
        </div>
        <div class="w-full mb-8">
            <h1 id="about" class="text-3xl font-comfortaa mb-2">About me</h1>
            <hr class="border-black mb-4">
            <p class="text-lg">
                I'm Oscar, a dedicated software engineering student focused on delivering innovative solutions. On this portfolio website, I share my skills, projects, and experiences.
                <br>
                <br>
                From an early age, I've been intrigued by the possibilities of software engineering. I find fulfillment in creating elegant and efficient solutions to complex challenges, combining creativity and problem-solving. As a student, I actively pursue opportunities for growth and contribution in this ever-evolving field.
                <br>
                <br>
                I am currently completing a degree in software engineering, and have developed a strong foundation in programming languages, data structures, algorithms, and software design principles. I have extended many classes with Java, wrestled with the c++ standard library, and returned back to the basics with c. I've dipped my toes into .NET, and I've learnt how to express myself on the internet with PHP. I'm consistently curious about exploring new and old technologies.
                <br>
                <br>
                Beyond academia, I thrive in collaborative environments, valuing effective communication and a positive impact. Approachable and enthusiastic, I appreciate diverse perspectives and eagerly contribute my own ideas. I am actively seeking meaningful opportunities to apply my skills, expand my expertise as a software engineer. 
            </p>
        </div>
        <div class="w-full">
            <h1 id="projects" class="text-3xl font-comfortaa mb-2">My projects</h1>
            <hr class="border-black mb-4">
            <div class="w-[98%] mx-auto ">
                <a href="/automata-gl" class="hover:text-gray-500 underline text-2xl font-comfortaa mb-2">automata-gl</a>
                <span class="grid grid-cols-2">
                    <p class="text-lg pr-8">
                        Cellular automata (video shows the "maze" ruleset) are a beautiful example of the ways that simple rulesets can create complex results. This project helped me understand c concepts such as pointers and arrays, and was a good introduction into OpenGL programming.
                    </p>
                    <span class="grid grid-cols-2 gap-4">
                        <video controls autoplay muted loop src="~assets/vid/gol1.mp4"></video>
                        <video controls autoplay muted loop src="~assets/vid/gol2.mp4"></video>
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>