import EARRING from "../assets/images/container.png";

const Suggestions = () => {
  // Array of items to display
  const items = [
    {
      id: 1,
      price: 'Rs.1,08,737',
      originalPrice: 'Rs.1,14,460',
      savings: 'Rs.5,723',
      imgSrc: EARRING, 
    },
    {
      id: 1,
      price: 'Rs.1,08,737',
      originalPrice: 'Rs.1,14,460',
      savings: 'Rs.5,723',
      imgSrc: EARRING, 
    },
    {
      id: 1,
      price: 'Rs.1,08,737',
      originalPrice: 'Rs.1,14,460',
      savings: 'Rs.5,723',
      imgSrc: EARRING, 
    },
    {
      id: 1,
      price: 'Rs.1,08,737',
      originalPrice: 'Rs.1,14,460',
      savings: 'Rs.5,723',
      imgSrc: EARRING, 
    },
    {
      id: 1,
      price: 'Rs.1,08,737',
      originalPrice: 'Rs.1,14,460',
      savings: 'Rs.5,723',
      imgSrc: EARRING, 
    },
    
  ];

  return (
    <div style={styles.suggestionsWrapper} className="flex flex-col gap-4">
      <span className="font-semibold">Suggestions</span>
      <div style={styles.itemsGrid}>
        {items.map((item) => (
          <div key={item.id} style={styles.itemCard}>
            <img src={item.imgSrc} alt="Product" style={styles.image} />
            <div style={styles.itemDetails}>
              <span style={styles.price}>{item.price}</span>
              <span style={styles.originalPrice}>{item.originalPrice}</span>
              <div style={styles.savings}>
                <span>Save</span>
                <span style={styles.savingAmount}>{item.savings}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  suggestionsWrapper: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  itemsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  itemCard: {
    border: '1px solid #e0e0e0',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    objectFit: 'cover',
  },
  itemDetails: {
    marginTop: '10px',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  originalPrice: {
    textDecoration: 'line-through',
    color: '#999',
    marginLeft: '10px',
  },
  savings: {
    marginTop: '5px',
    color: '#800080',
  },
  savingAmount: {
    marginLeft: '5px',
    color: '#800080',
  },
};

export default Suggestions;
