import styles from './styles/loading.module.css'
export default function loading(params) {
    return(
        <>
            <div className={styles.kineticParent}>
                <div className={styles.kinetic}></div>
            </div>
        </>
    )
};
