import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";

import "ol/ol.css";

const useStyles = makeStyles(() => ({
    mapRoot: {
        position: "absolute",
        inset: 0,
        zIndex: 0,
        backgroundColor: "#eef2f7",
    },
}));

export default function OpenLayersMap() {
    const classes = useStyles();
    const mapElementRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapElementRef.current || mapRef.current) {
            return undefined;
        }

        const baseLayer = new TileLayer({
            source: new XYZ({
                url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
                crossOrigin: "anonymous",
                attributions: "© OpenStreetMap contributors",
            }),
        });

        const map = new Map({
            target: mapElementRef.current,
            layers: [baseLayer],
            view: new View({
                center: fromLonLat([139.767125, 35.681236]),
                zoom: 15,
                minZoom: 3,
                maxZoom: 19,
            }),
            controls: [],
        });

        mapRef.current = map;

        setTimeout(() => {
            map.updateSize();
        }, 0);

        return () => {
            map.setTarget(undefined);
            mapRef.current = null;
        };
    }, []);

    return <div ref={mapElementRef} className={classes.mapRoot} />;
}