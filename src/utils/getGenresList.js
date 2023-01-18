export const getGenresList = genresArr => {
    const genresStringList = genresArr
      .map(genre => {
        return genre.name;
      })
      .join(', ');
  
    return genresStringList;
  };