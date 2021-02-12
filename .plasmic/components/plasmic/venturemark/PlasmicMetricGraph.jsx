// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mSMs7FqGjFMPgGjdzmbmrV
// Component: AqRIboOsVO
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
import sty from "./PlasmicMetricGraph.module.css"; // plasmic-import: AqRIboOsVO/css

export const PlasmicMetricGraph__VariantProps = new Array("userView");

export const PlasmicMetricGraph__ArgProps = new Array();

function PlasmicMetricGraph__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <img
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      alt={""}
      className={classNames(defaultcss.img, projectcss.root_reset, sty.root, {
        [sty.root__userView_read]: hasVariant(variants, "userView", "read")
      })}
      role={"img"}
      src={"/plasmic/venturemark/images/vector5.svg"}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMetricGraph__ArgProps,
      internalVariantPropNames: PlasmicMetricGraph__VariantProps
    });

    return PlasmicMetricGraph__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMetricGraph";
  } else {
    func.displayName = `PlasmicMetricGraph.${nodeName}`;
  }
  return func;
}

export const PlasmicMetricGraph = Object.assign(
  // Top-level PlasmicMetricGraph renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicMetricGraph
    internalVariantProps: PlasmicMetricGraph__VariantProps,
    internalArgProps: PlasmicMetricGraph__ArgProps
  }
);

export default PlasmicMetricGraph;
/* prettier-ignore-end */