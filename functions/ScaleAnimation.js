import React from 'react';
import { Animated } from 'react-native';

/* list of props that can be passed to the ScaleAnimation component
- toggleAnimation: a boolean that triggers the animation
- onlyStart: a boolean which, if true, will only start the animation when toggleAnimation is triggered
- onlyStartAndStay: a boolean which, if true, will only start the animation when toggleAnimation is triggered and will stay at the end of the animation

*/

const ScaleAnimation = (toggleAnimation, onlyStart, onlyStartAndStay, durationAnim, onlyStartAndStayOnce) => {

    const scaleValue = React.useRef(new Animated.Value(0));

    const [firstRender, setFirstRender] = React.useState(true);


    const interpolatedScaleAnimation = scaleValue.current.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 1.2, 1],
    });

    let duration = 400;

    if (durationAnim !== undefined) {
        duration = durationAnim;
    }

    React.useEffect(() => {


        function startAnimation() {
            Animated.timing(scaleValue.current, {
                toValue: 1,
                duration: duration,
                useNativeDriver: true,
            }).start();
        }

        function endAnimation() {
            Animated.timing(scaleValue.current, {
                toValue: 0,
                duration: duration,
                useNativeDriver: true,
            }).start();
        }

        if (onlyStartAndStayOnce) {
            if (!firstRender) {
                scaleValue.current.setValue(0);
                setTimeout(() => {
                    startAnimation();
                }, duration);
            } else {
                setFirstRender(false);
                scaleValue.current.setValue(0);
            }
        }
        

        if (!onlyStartAndStayOnce) {
            if (scaleValue.current._value === 0 || onlyStart) {
                startAnimation();
                if (onlyStart) {
                    setTimeout(() => {
                        endAnimation();
                    }, duration);
                }
            } else {
                endAnimation();
                if (onlyStartAndStay) {
                    setTimeout(() => {
                        startAnimation();
                    }, duration);
                }
            }
        }



    }, [toggleAnimation]);

    return interpolatedScaleAnimation;
};

export default ScaleAnimation;