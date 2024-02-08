<template>
    <div class="font-archivo">
        <div class="h-[calc(100vh-5rem)] table w-full">
            <span class="table-cell h-auto align-middle w-full">
                <span class="inline-block text-normal w-full text-center custom-bottom-margin">
                    <h1 class="text-7xl font-comfortaa">Oscar Coghlan</h1> 
                    <br>
                    <p class="text-lg">Aspiring software developer</p>
                    <a href="#about" class="underline">learn more</a>
                </span>
            </span>
        </div>
        <div class="w-full mb-8">
            <h1 id="about" class="text-3xl font-comfortaa mb-2">About me</h1>
            <hr class=" mb-1">
            <hr class=" mb-4">
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
            <hr class=" mb-1">
            <hr class=" mb-4">
            <div class="w-[98%] mx-auto ">
                <span class="grid grid-cols-1 md:grid-cols-2">
                    <span class="lg:pr-2 pr-8">
                        <a href="/automata-gl" class="underline text-2xl font-comfortaa mb-2">automata-gl</a>
                        <p class="text-lg ">
                            Cellular automata are a beautiful example of the ways that simple rulesets can create complex results. This project helped me understand c concepts such as pointers and arrays, and was a good introduction into OpenGL programming. 
                        </p>
                        <p class="lg:block hidden text-lg">
                            The two videos show two different rulesets, one showing the traditional "Conways Game of Life" ruleset, the other showing a less popular "Maze" ruleset.
                        </p>
                    </span>
                    <span class="grid grid-cols-1 items-center ml-auto mr-auto gap-4 hidden md:block">
                        <video class="max-h-80 border-c-offwhite border-c-1" controls autoplay muted loop src="~assets/vid/gol1.mp4"></video>
                    </span>
                </span>
            </div>
            <hr class=" mb-4 mt-4">
            <div class="w-[98%] mx-auto ">
                <span class="grid grid-cols-1 md:grid-cols-2">
                    <span class="grid grid-cols-1 gap-4 pr-8 items-center ml-auto mr-auto hidden md:block">
                        <video class="max-h-80 border-c-offwhite border-c-1" controls autoplay muted loop src="~assets/vid/ballsprev.mp4"></video>
                    </span>
                    <span class="lg:pr-0 pr-2">
                        <a href="/collisions-cpp" class=" underline text-2xl font-comfortaa mb-2">collisions-cpp</a>
                        <p class="text-lg ">
                            Simulating particle physics is a very fun project, it is a research and mathematics intesive endeavor, and tests how far you will go for perfection. In this case I unforunately did not attain perfection, when you add gravity, this engine falls apart at the seams, probably because there is technically no "loss" in the system. Anyway, it's a pretty fun little application, and for it's faults, I'm proud of how it turned out. Making this taught me a lot about vectors, matrixes, and taught me all about C++ objects.
                        </p>
                    </span>
                </span>
            </div>
            <hr class=" mb-4 mt-4">
            <div class="w-[98%] mx-auto ">
                <span class="grid grid-cols-1 md:grid-cols-2">
                    <span class="lg:pr-0 pr-2">
                        <a href="/collisions-cpp" class="underline text-2xl font-comfortaa mb-2">some-other-project</a>
                        <p class="text-lg ">
                            Simulating particle physics is a very fun project, it is a research and mathematics intesive endeavor, and tests how far you will go for perfection. In this case I unforunately did not attain perfection, when you add gravity, this engine falls apart at the seams, probably because there is technically no "loss" in the system. Anyway, it's a pretty fun little application, and for it's faults, I'm proud of how it turned out. Making this taught me a lot about vectors, matrixes, and taught me all about C++ objects.
                        </p>
                    </span>
                    <span class="grid grid-cols-1 gap-4 pr-8 items-center ml-auto mr-auto hidden md:block">
                        <video class="max-h-80" controls autoplay muted loop src="~assets/vid/ballsprev.mp4"></video>
                    </span>
                </span>
            </div>
            <hr class=" mb-8 mt-4">
            <h1 id="projects" class="text-3xl font-comfortaa mb-2">Contact Me</h1>
            <hr class=" mb-1">
            <hr class=" mb-4">
            <div class="">
                <p class="text-lg text-center">Thanks for visiting my page, if you would like to contact me, please pursue the channels listed below.</p>
                <div class="w-[98%] grid grid-cols-1 md:grid-cols-3">
                    <span class="w-full text-center">
                        <a class="w-[50%] mx-[50%] block" href="https://github.com/oscarcoghlan/">
                            <img src="/assets/svg/github-mark-white.svg">
                        </a>
                    </span>
                    <span class="w-full text-center">
                        faw
                    </span>
                    <span class="w-full text-center">
                        fwaj
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>