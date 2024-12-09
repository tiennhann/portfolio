import React, { useState, useEffect, useRef } from 'react';


function FadeInComponent(props) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Set to true when the element is in view
                    observer.unobserve(domRef.current); // Stop observing after it becomes visible
                }
            });
        });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current); // Unobserve when component is unmounted to avoid memory leaks
            };
        };
    }, []);

    return (
        <div className={`fade-in ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${props.delay}` }}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInComponent;