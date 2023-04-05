import React, {useState, useEffect} from 'react';
import './TextGpt.css'

const TextGpt = () => {
  const [spans, setSpans] = useState<NodeListOf<HTMLSpanElement> | null>(null);

  useEffect(() => {
    setSpans(document.querySelectorAll('.word span'));
  }, []);

  useEffect(() => {
    if (spans) {
      spans.forEach((span, idx) => {

        span.addEventListener('click', (e) => {
          if (e.target)
            (e.target as HTMLElement).classList.add('active');
        });
        span.addEventListener('animationend', (e) => {
          if (e.target)
            (e.target as HTMLElement).classList.remove('active');
        });

        // Initial animation
        setTimeout(() => {
          span.classList.add('active');
        }, 750 * (idx + 1));
      });
    }
  }, [spans]);

  return(
      <div className="word">
    <span>R</span>
    <span>e</span>
    <span>a</span>
    <span>c</span>
    <span>t</span>
    <span>&nbsp;</span>
    <span>c</span>
    <span>h</span>
    <span>a</span>
    <span>t</span>
    <span>&#128736;</span>
    <span>G</span>
    <span>P</span>
    <span>T</span>
  </div>
  )

};

export default TextGpt;