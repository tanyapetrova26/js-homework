// task 1

const response = {
    data: [
      {
        username: "samuel",
        is_active: true,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "john",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
      {
        username: "peter",
        is_active: false,
        created_at: "2020-11-20T09:53:50.000000Z",
      },
    ],
    meta: {
      paging: {
        current: 1,
        next: 2,
        prev: null,
        total: 14,
        per_page: 3,
      },
    },
  };

  const {meta: {
            paging: {
                total: totalPaging
            }
        }
    } = response;

console.log('totalPaging', totalPaging);

const { data: [primaryObj] } = response;
 const { is_active: isActive} = primaryObj;

 console.log('primaryObj', primaryObj);
 console.log('isActive', isActive);

// task 2

const user = {
    name: "gabriel",
    surname: "brown",
    age: 17,
    height: 178,
  };

  const {
    name: userName,
    surname: userSurname,
    ...parameters
    } = user;

    console.log('userName', userName);
    console.log('userSurname', userSurname);
    console.log('parameters', parameters);


    // task 3

    const max = (a, b) => {
        return a > b ? a : b;
      };
