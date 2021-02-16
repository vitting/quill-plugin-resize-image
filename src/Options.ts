export type overlayStyles = {
  position: string;
  boxSizing: string;
  border: string;
};

export type handleStyles = {
  position: string;
  height: string;
  width: string;
  backgroundColor: string;
  border: string;
  boxSizing: string;
  opacity: string;
};

export type displayStyles = {
  position: string;
  font: string;
  padding: string;
  textAlign: string;
  backgroundColor: string;
  color: string;
  border: string;
  boxSizing: string;
  opacity: string;
  cursor: string;
};

export type toolbarStyles = {
  position: string;
  top: string;
  right: string;
  left: string;
  height: string;
  minWidth: string;
  font: string;
  textAlign: string;
  color: string;
  boxSizing: string;
  cursor: string;
};

export type toolbarButtonStyles = {
  display: string;
  width: string;
  height: string;
  background: string;
  border: string;
  verticalAlign: string;
};

export type toolbarButtonSvgStyles = {
  fill: string;
  stroke: string;
  strokeWidth: string;
};

export interface Options {
  modules: string[];
  overlayStyles: overlayStyles;
  handleStyles: handleStyles;
  displayStyles: displayStyles;
  toolbarStyles: toolbarStyles;
  toolbarButtonStyles: toolbarButtonStyles;
  toolbarButtonSvgStyles: toolbarButtonSvgStyles;
}
