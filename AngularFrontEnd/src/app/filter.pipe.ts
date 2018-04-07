import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // first argument of filter is the array to filter and  
  // second argument of filter is the keyword on which array is filtered

  transform(users: any, searchKeyword: any): any {

    // check if search term is undefined (return all users)
    if(searchKeyword === undefined) return users;
    // return updated users array (if search keyword)
    return users.filter((user) => {
      return user.username.toLowerCase().includes(searchKeyword.toLowerCase())
    })
  }

}
