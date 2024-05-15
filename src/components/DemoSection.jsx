import React, {Fragment} from "react";
import "./DemoSection.css";

const DemoSection = () => {
    return (
        <div className="demo-container">
            <h2 className="text-5xl font-bold my-8">Demo Section</h2>
            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/o9pNopC1BMU?autoplay=1&loop=1&playlist=o9pNopC1BMU&rel=0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className="mx-auto"
                ></iframe>
            </div>
            <p className="demo-description font-thin">
                Take a sneak peek into our time-traveling adventures! Explore simulations,
                historical reenactments, and futuristic scenarios that will transport you through
                the ages.
            </p>
            <div className="technology-explanation">
                <h2 className="font-bold text-3xl my-4">Technology Used</h2>
                <p className="mb-6">
                    <b>1. ReactJS : </b> ReactJS is a popular JavaScript library for building user
                    interfaces, particularly for single-page applications. It's known for its
                    component-based architecture, which allows developers to create reusable UI
                    components. In the context of this project, ReactJS is used for developing the
                    frontend of the app, handling user interactions, and managing the application
                    state.
                </p>
                <p className="mb-6">
                    <b>2. ThreeJS : </b> ThreeJS is a JavaScript library used for creating and
                    displaying 3D graphics in web browsers. It provides APIs for creating and
                    manipulating 3D objects, scenes, and animations using WebGL, a JavaScript API
                    for rendering interactive 3D graphics. In this project, ThreeJS is likely used
                    to render the historical maps and 3D elements in the augmented reality
                    environment.
                </p>
                <p className="mb-6">
                    <b>3. Unity : </b> Unity is a powerful and widely used game development platform
                    that supports the creation of games and interactive experiences across various
                    platforms, including desktop, mobile, and virtual reality (VR). In the context
                    of this project, Unity will likely be used to develop more advanced AR/VR
                    features, such as immersive environments, interactions, and animations.
                </p>
                <p className="mb-6">
                    <b>4. WebGL : </b>WebGL (Web Graphics Library) is a JavaScript API for rendering
                    interactive 3D graphics within any compatible web browser without the use of
                    plug-ins. It is based on OpenGL ES and provides a low-level interface for
                    rendering 3D graphics in web applications. WebGL is likely used in conjunction
                    with ThreeJS and Unity to render 3D graphics and scenes in the web browser.
                </p>
                <p className="mb-6">
                    <b>5. AR/VR tools : </b> Various AR/VR tools and frameworks may be used to
                    enhance the augmented reality experience in the app. These tools could include
                    ARKit and ARCore for mobile AR, as well as VR frameworks like Oculus SDK or
                    SteamVR for virtual reality experiences. These tools provide capabilities such
                    as motion tracking, spatial mapping, and gesture recognition, which are
                    essential for creating immersive AR/VR experiences.
                </p>
            </div>
            <div className="resource-column">
                <p><b>Resources</b></p>
                <ul>
                    <li>
                        <span className="logos--unity"></span>
                        <a href="https://docs.unity3d.com/Manual/index.html">Unity
                        Docs</a>
                    </li>
                    <li>
                        <span className="mdi--script"></span>
                        <a href="https://docs.unity3d.com/ScriptReference/">Script Reference</a>
                    </li>
                    <li>
                    <span className="icon-park-outline--api"></span>
                        <a href="http://www.google.com">API Reference</a>
                    </li>
                    <li>
                    <span className="logos--unity"></span>
                        <a href="https://unity.com/learn/get-started">Unity Learning</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DemoSection;
