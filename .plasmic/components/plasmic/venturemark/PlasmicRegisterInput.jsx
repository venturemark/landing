// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mSMs7FqGjFMPgGjdzmbmrV
// Component: DwE9wff9es
import * as React from "react";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import projectcss from "./plasmic_venturemark.module.css"; // plasmic-import: mSMs7FqGjFMPgGjdzmbmrV/projectcss
import sty from "./PlasmicRegisterInput.module.css"; // plasmic-import: DwE9wff9es/css

export const PlasmicRegisterInput__VariantProps = new Array("error", "step");

export const PlasmicRegisterInput__ArgProps = new Array("placeholder");

function PlasmicRegisterInput__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <input
      data-plasmic-name={"input"}
      data-plasmic-override={overrides.input}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.input,
        projectcss.root_reset,
        sty.input,
        {
          [sty.input__error_hasError]: hasVariant(variants, "error", "hasError")
        }
      )}
      placeholder={args.placeholder}
      size={1}
      type={"text"}
    />
  );
}

const PlasmicDescendants = {
  input: ["input"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicRegisterInput__ArgProps,
      internalVariantPropNames: PlasmicRegisterInput__VariantProps
    });

    return PlasmicRegisterInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "input") {
    func.displayName = "PlasmicRegisterInput";
  } else {
    func.displayName = `PlasmicRegisterInput.${nodeName}`;
  }
  return func;
}

export const PlasmicRegisterInput = Object.assign(
  // Top-level PlasmicRegisterInput renders the root element
  makeNodeComponent("input"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRegisterInput
    internalVariantProps: PlasmicRegisterInput__VariantProps,
    internalArgProps: PlasmicRegisterInput__ArgProps
  }
);

export default PlasmicRegisterInput;
/* prettier-ignore-end */