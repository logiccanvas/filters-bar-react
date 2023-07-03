export const extractChildren = (children) => {
  if (!children) return null;

  const multipleChildren = Array.isArray(children);
  let _children;

  if (multipleChildren) {
    _children = [...children];
    _children = _children.filter((child) => child && child);
  } else {
    _children = [children];
  }

  return _children;
};
export const getComponentsToDisplay = (element, children) => {
  const containerWidth = element.clientWidth;

  const adjustableNumer = containerWidth / 230;
  const roundedNum = Math.trunc(adjustableNumer);

  const _mainFilterComps = [...children.slice(0, roundedNum)];
  const _dropdownFilterComps = [...children.slice(roundedNum)];

  return {
    _mainFilterComps,
    _dropdownFilterComps,
  };
};
