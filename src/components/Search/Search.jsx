import styles from './styles.module.css'

const Search = ({ keywords, setKeywords }) => {
    return (
        <div className={styles.search}>
            <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className={styles.input}
                placeholder='Enter your search query here...'
            />
        </div>
    )
};

export default Search;