import { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import clx from "classnames";
import noop from "lodash/noop";

import usePressEscape from "../../hooks/usePressEscape";
import useClickOutside from "../../hooks/useClickOutside";
import useWindowResize from "../../hooks/useWindowResize";

import { extractChildren, getComponentsToDisplay } from "./utils";

import "./styles.scss";

const HorizontalFilterBar = ({ className, onClearAll, children }) => {
  const filterBarRef = useRef(null);

  const [filterBarChildren, setFilterBarChildren] = useState(null);
  const [mainFilterComps, setMainFilterComps] = useState(null);
  const [dropdownFilterComps, setDropdownFilterComps] = useState(null);
  const [open, setOpen] = useState(false);
  const [timeStamp, setTimeStamp] = useState(0);

  const extractComponents = useCallback(() => {
    if (filterBarRef?.current && filterBarChildren) {
      const { _mainFilterComps, _dropdownFilterComps } = getComponentsToDisplay(
        filterBarRef.current,
        filterBarChildren
      );

      setMainFilterComps(_mainFilterComps);
      setDropdownFilterComps(_dropdownFilterComps);
    }
  }, [filterBarRef, filterBarChildren]);

  useEffect(() => {
    const _children = extractChildren(children);

    setFilterBarChildren(_children);
  }, [children]);

  useEffect(() => {
    extractComponents();
  }, [filterBarRef, filterBarChildren, timeStamp, extractComponents]);

  const toggleDropdown = () => setOpen(!open);

  const closeDropdown = () => setOpen(false);

  const handleResize = (event) => setTimeStamp(event.timeStamp);

  usePressEscape(filterBarRef, closeDropdown);
  useClickOutside(filterBarRef, closeDropdown);
  useWindowResize(handleResize, [filterBarRef]);

  const handleClearAll = () => {
    closeDropdown();
    onClearAll();
  }

  const renderDropdownButton = () => {
    if (dropdownFilterComps?.length) {
      return (
        <button className="action-btn" onClick={toggleDropdown}>
          <i className="icon-dropdown"></i>
        </button>
      );
    }
  };

  return (
    <div ref={filterBarRef} className={clx("filter-bar", className)}>
      <div className="filters-main-bar">{mainFilterComps}</div>

      <div className="filter-actions">
        {renderDropdownButton()}
        <button className="action-btn" onClick={handleClearAll}>
          <i className="icon-clear"></i>
        </button>
      </div>

      {open && <div className="filters-dropdown">{dropdownFilterComps}</div>}
    </div>
  );
};

HorizontalFilterBar.defaultProps = {
  className: "",
  children: null,
  onClearAll: noop,
};

HorizontalFilterBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  onClearAll: PropTypes.func,
};

export default HorizontalFilterBar;
