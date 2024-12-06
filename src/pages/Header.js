const Header = () => {

    return(
        <>
        <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="/">Recipe Organiser</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link text-primary" aria-current="page" href="/">Recipes</a>
        <a class="nav-link text-primary" href="/addRecipe">Add Recipe</a>
      </div>
    </div>
  </div>
</nav>
        </header>
        </>
    )
}

export default Header