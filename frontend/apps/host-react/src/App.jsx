import React, {useEffect, useState, useRef} from "react";
import {createApp} from "vue";

function App() {
    const vueContainerRef = useRef(null);
    const [loadError, setLoadError] = useState(null);

    useEffect(() => {
        import("remote_vue/VueWidget")
            .then((mod) => {
                const VueComponent = mod.default || mod;
                createApp(VueComponent).mount(vueContainerRef.current);
            })
            .catch((err) => console.error("Failed to load remote:", err));
    }, []);

    return (
        <div style={{padding: "1rem"}}>
            <h1>⚛ React Host</h1>
            <p>Ниже подключён компонент из Vue-приложения:</p>
            <div style={{marginTop: "1rem"}}>
                {loadError ? (
                    <p style={{ color: "red" }}>Ошибка загрузки remote: {String(loadError)}</p>
                ) : (
                    <div ref={vueContainerRef} />
                )}
            </div>
        </div>
    );
}

export default App;
