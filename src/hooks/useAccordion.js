import { useEffect } from 'react';

const DURATION = 250;
const EASING = 'ease-out';

export default function useAccordion(detailsRef, summaryRef, contentRef) {
    useEffect(() => {
        const details = detailsRef.current;
        const summary = summaryRef.current;
        const content = contentRef.current;

        let animation = null;

        const onClick = (e) => {
            e.preventDefault();
            details.style.overflow = 'hidden';

            if (details.open) {
                shrink();
            } else {
                open();
            }
        }

        const shrink = () => {
            const startHeight = `${details.offsetHeight}px`;
            const endHeight = `${summary.offsetHeight}px`;

            if (animation) {
                animation.cancel();
            }

            animation = details.animate(
                { height: [startHeight, endHeight] },
                { duration: DURATION, easing: EASING }
            );
            animation.onfinish = () => onAnimationFinish(false);
        }

        const open = () => {
            details.style.height = `${details.offsetHeight}px`;
            details.open = true;
            window.requestAnimationFrame(expand);
        }

        const expand = () => {
            const startHeight = `${details.offsetHeight}px`;
            const endHeight = `${summary.offsetHeight + content.offsetHeight}px`;

            if (animation) {
                animation.cancel();
            }

            animation = details.animate(
                { height: [startHeight, endHeight] },
                { duration: DURATION, easing: EASING }
            );
            animation.onfinish = () => onAnimationFinish(true);
        }

        const onAnimationFinish = (open) => {
            animation = null;
            details.open = open;
            details.style.height = details.style.overflow = '';
            details.removeAttribute('style');
        }

        summary.addEventListener('click', onClick);

        return () => {
            summary.removeEventListener('click', onClick);
        }
    }, [detailsRef, summaryRef, contentRef]);
}


