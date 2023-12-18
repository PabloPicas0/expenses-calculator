const Title = () => {
  const currentYear = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });

  return (
    <header className="header">
      <h1>Budget available in {currentYear}</h1>
      <p>Income</p>
      <p>Expenses</p>
    </header>
  );
};

export default Title
