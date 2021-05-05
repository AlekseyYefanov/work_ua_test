export const validate = values => {
  const errors = {};
  if (!values.name) {
      errors.name = 'Пожалуйста, укажите название должности.';
  }

  if (!values.city) {
      errors.city = 'Пожалуйста, укажите город работы.';
  }

  if (!values.address) {
      errors.address = 'Пожалуйста, укажите адрес работы.';
  }

  if (!values.price && typeof values.price === 'object') {
    if(!values.price.from || !values.price.to){
      errors.price = 'Пожалуйста, укажите минимальное и максимальное значение зарплаты.';
    }     
  } else  if (!values.price && typeof values.price === 'string') {
    errors.price = 'Пожалуйста, укажите зарплату.';
  }
 
  return errors;
};