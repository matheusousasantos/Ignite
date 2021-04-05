import styles from './styles.module.scss';

export function Subscriblebutton() {

    return  (
        <button 
            type="button"
            className={styles.subscribeButton}
        >
           Subscribe now
        </button>
    );
}