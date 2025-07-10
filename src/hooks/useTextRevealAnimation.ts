import { useEffect, useState } from "react";
import { useAnimate, stagger } from "framer-motion";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate<HTMLHeadingElement>(); // ✅ type the element (e.g., HTMLHeadingElement)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && scope.current && typeof window !== 'undefined') {
      new SplitType(scope.current, {
        types: "lines, words",
        tagName: "span",
      });
    }
  }, [scope, isMounted]);

  const entranceAnimation = () => {
    if (!isMounted || !scope.current || typeof window === 'undefined') return;

    return animate(
      scope.current.querySelectorAll(".word"),
      { transform: "translateY(0)" },
      {
        duration: 0.5,
        delay: stagger(0.15),
      }
    );
  };

  const exitAnimation=()=>{
    if (!isMounted || !scope.current || typeof window === 'undefined') return;

    return animate(
      scope.current.querySelectorAll(".word"),
      { transform: "translateY(100%)" },
      {
        duration: 0.3,
        delay: stagger(-0.25,{
   startDelay:scope.current.querySelectorAll('.word').length*0.25,
        }),
      }
    );
  }

  return {
    scope,
    entranceAnimation,
    exitAnimation
  };
};

export default useTextRevealAnimation;
