"use client";
import React from "react";
import { ReactLenis, useLenis } from "lenis/react";

const SmoothScroll = ({ children }) => {
	return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
