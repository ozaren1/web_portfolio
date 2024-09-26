import Header from "../../components/Header";
import styles from "../../components/Portfolio/Portfolio.module.scss";
import React from "react";
import Card from '../../components/Card'
export default function PortfolioIndex(){

    return (
    <>
        <Header />
        <div className={styles.wrapper}>
            <Card url={'model1'} />
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </>
)
}