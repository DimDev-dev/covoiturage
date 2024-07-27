const footer = () => {
  return (
    <footer className="bg-primary py-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="#">À propos</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <div>
          <a href="#" className="text-white hover:text-gray-300 mr-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300 mr-4">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>&copy; 2024 Vandevelde Dimitri. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default footer;
