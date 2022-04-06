import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
export default function Guide({title, description,link}) {
    return (
        <div className={styles.guide}>
            <div className="picture-container">
                <img src=''/>
            </div>
            <div className="info">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link
                    className="button button--secondary button--lg"
                    to={link}>
                        Bekijk dit project.
                </Link>
            </div>
        </div>
    );
}
