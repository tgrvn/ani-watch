import React, { useEffect, useMemo, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useClickOutside } from "../../hooks/useClickOutside";
import styles from "./SearchSelect.module.scss";

export default function SearchSelect({ options, selected, onSelect }) {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [tagsVisible, setTagsVisible] = useState(false);
  const [searchQuerry, setSearchQuerry] = useState("");

  const wrapperref = useRef();
  const optionsRef = useRef();

  const filteredOptions = useMemo(() => {
    if (options) {
      return [...options].filter((o) =>
        o.name.toLowerCase().includes(searchQuerry.toLowerCase().trim())
      );
    }
  }, [options, searchQuerry]);

  useClickOutside(wrapperref, () => {
    setSearchQuerry("");
    setOptionsVisible(false);
    setTagsVisible(true);
  });

  useEffect(() => {
    setTagsVisible(selected.length > 0);
  }, [selected]);

  function handleSelect(option) {
    setSearchQuerry("");
    onSelect(option);
  }

  return (
    <div
      className={styles.select}
      ref={wrapperref}
      onClick={() => setTagsVisible(false)}
    >
      <div className={styles.wrapper} onClick={() => setOptionsVisible(true)}>
        {tagsVisible && selected.length > 0 && (
          <div className={styles.tags}>
            <div className={styles.first} onClick={() => onSelect(selected[0])}>
              {selected[0]}
            </div>
            {selected.length > 1 && (
              <div className={styles.counter}>+{selected.length}</div>
            )}
          </div>
        )}

        <input
          type={"text"}
          placeholder={"Any"}
          className={`${styles.input}`}
          onChange={(e) => setSearchQuerry(e.target.value)}
          value={searchQuerry}
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
        <div ref={optionsRef} className={styles.options}>
          {filteredOptions &&
            filteredOptions.map((o) => (
              <div
                key={o.mal_id}
                onClick={() => handleSelect(o.name)}
                className={styles.option}
              >
                <div className={styles.name}>{o.name}</div>
                {selected.includes(o.name) && (
                  <div className={styles.selected}></div>
                )}
              </div>
            ))}
        </div>
      </CSSTransition>
    </div>
  );
}
