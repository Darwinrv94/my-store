class CategoriesService {
  constructor() {
    this.categories = []
  }

  getCategories() {
    return [
      {
        name: 'Calzado'
      },
      {
        name: 'Bolsos'
      }
    ]
  }
}

module.exports = CategoriesService
