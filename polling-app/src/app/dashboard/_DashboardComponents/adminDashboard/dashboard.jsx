import styles from './styles.module.css'
export default function AdminDashboard(props) {
    const userProfile = props.props 
   

    return(
        <>
        <p>admin</p>
            {userProfile.gender === "female" && <h1 className={styles.welcomeMessage}>Welcome Mrs {userProfile.firstName} </h1> }
            {userProfile.gender === "male" && <h1 className={styles.welcomeMessage}>Welcome Mr {userProfile.firstName} </h1> }
        </>
    )
};
