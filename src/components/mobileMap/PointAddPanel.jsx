import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
    },

    description: {
        fontSize: 12,
        color: "#6b7280",
        lineHeight: 1.5,
    },

    fieldGroup: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
    },

    label: {
        fontSize: 12,
        fontWeight: 700,
        color: "#374151",
    },

    input: {
        height: 42,
        border: "1px solid #d1d5db",
        borderRadius: 10,
        padding: "0 12px",
        fontSize: 14,
        color: "#111827",
        outline: "none",
        backgroundColor: "#ffffff",
    },

    textarea: {
        minHeight: 72,
        border: "1px solid #d1d5db",
        borderRadius: 10,
        padding: "10px 12px",
        fontSize: 14,
        color: "#111827",
        outline: "none",
        resize: "vertical",
        backgroundColor: "#ffffff",
        fontFamily: "inherit",
    },

    currentPointCard: {
        padding: 12,
        borderRadius: 12,
        backgroundColor: "#eff6ff",
        border: "1px solid #bfdbfe",
        display: "flex",
        alignItems: "center",
        gap: 10,
    },

    currentPointIcon: {
        width: 34,
        height: 34,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        color: "#1a73e8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },

    currentPointText: {
        flex: 1,
        minWidth: 0,
    },

    currentPointTitle: {
        fontSize: 13,
        fontWeight: 700,
        color: "#1f2937",
    },

    currentPointSub: {
        fontSize: 11,
        color: "#64748b",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },

    optionRow: {
        display: "flex",
        gap: 8,
    },

    optionButton: {
        flex: 1,
        height: 38,
        borderRadius: 10,
        border: "1px solid #d1d5db",
        backgroundColor: "#ffffff",
        color: "#374151",
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
    },

    optionButtonActive: {
        borderColor: "#1a73e8",
        backgroundColor: "#eff6ff",
        color: "#1a73e8",
    },

    actionRow: {
        display: "flex",
        gap: 10,
        marginTop: 4,
    },

    secondaryButton: {
        flex: 1,
        height: 44,
        borderRadius: 12,
        border: "1px solid #d1d5db",
        backgroundColor: "#ffffff",
        color: "#374151",
        fontSize: 14,
        fontWeight: 700,
        cursor: "pointer",
    },

    primaryButton: {
        flex: 1,
        height: 44,
        borderRadius: 12,
        border: "none",
        backgroundColor: "#1a73e8",
        color: "#ffffff",
        fontSize: 14,
        fontWeight: 700,
        cursor: "pointer",
    },
}));

export default function PointAddPanel({ onBack }) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography className={classes.description}>
                地図中央の位置を住所ポイントとして登録します。必要に応じて名称やメモを入力してください。
            </Typography>

            <Box className={classes.currentPointCard}>
                <Box className={classes.currentPointIcon}>
                    <span className="material-symbols-outlined">my_location</span>
                </Box>

                <Box className={classes.currentPointText}>
                    <Typography className={classes.currentPointTitle}>
                        現在の中心位置
                    </Typography>
                    <Typography className={classes.currentPointSub}>
                        139.66529, 35.71366
                    </Typography>
                </Box>
            </Box>

            <Box className={classes.fieldGroup}>
                <Typography className={classes.label}>名称</Typography>
                <input
                    className={classes.input}
                    type="text"
                    placeholder="例：現地確認地点"
                />
            </Box>

            <Box className={classes.fieldGroup}>
                <Typography className={classes.label}>住所</Typography>
                <input
                    className={classes.input}
                    type="text"
                    placeholder="住所を入力、または逆ジオコーディング"
                />
            </Box>

            <Box className={classes.fieldGroup}>
                <Typography className={classes.label}>メモ</Typography>
                <textarea
                    className={classes.textarea}
                    placeholder="補足情報を入力"
                />
            </Box>

            <Box className={classes.actionRow}>
                <button type="button" className={classes.secondaryButton} onClick={onBack}>
                    戻る
                </button>

                <button type="button" className={classes.primaryButton}>
                    登録する
                </button>
            </Box>
        </Box>
    );
}