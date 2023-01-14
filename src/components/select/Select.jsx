import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useClickOutside } from "../../hooks/useClickOutside";
import styles from "./Select.module.scss";

export default function Select({ options, selected, onSelect }) {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const wrapperref = useRef();
  const optionsRef = useRef();

  useClickOutside(wrapperref, () => setOptionsVisible(false));

  function handleSelect(value) {
    onSelect(value);
    setOptionsVisible(false);
  }

  return (
    <div className={styles.select} ref={wrapperref}>
      <div className={styles.wrapper} onClick={() => setOptionsVisible(true)}>
        <input
          type={"text"}
          placeholder={"Any"}
          className={`${styles.input}`}
          value={selected}
          disabled
        />
        <div
          className={styles.right}
          onClick={(e) => {
            e.stopPropagation();
            setOptionsVisible(!optionsVisible);
          }}
        ></div>
      </div>

      <CSSTransition
        nodeRef={optionsRef}
        in={optionsVisible}
        timeout={200}
        classNames={"fade"}
        unmountOnExit
      >
        <div className={styles.options} ref={optionsRef}>
          {options &&
            options.map((o) => (
              <div
                key={o.mal_id}
                onClick={() => handleSelect(o.name)}
                className={styles.option}
              >
                <div className={styles.name}>{o.name}</div>
                {o.name === selected && <div className={styles.selected}></div>}
              </div>
            ))}
        </div>
      </CSSTransition>
    </div>
  );
}
