# FE-Day10-Login-Interceptor (server available on server.branch)

- interceptor clone the header for jwt auth
  
  ```diff
    export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }
      intercept(req: HttpRequest<any>, next: HttpHandler) {
          const authToken = this.authService.getToken();
  +       req = req.clone({
  +           setHeaders: {
  +               Authorization: "Bearer " + authToken
              }
          });
          return next.handle(req);
      }
    }
  ```
- Login service
  
  ```diff
    signIn(user: Login) {
      return this.http
        .post<any>(`${this.endpoint}/signin`, user)
        .subscribe((res: any) => {
  +       localStorage.setItem('access_token', res.token);
  +       this.getUserProfile(res._id).subscribe((res) => {
            this.currentUser = res;
            this.router.navigate(['user-profile/' + res.msg._id]);
          });
        });
    }
    
    getUserProfile(id: any): Observable<any> {
      let api = `${this.endpoint}/user-profile/${id}`;
  +   return this.http.get(api, { headers: this.headers }).pipe(
        map((res) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
    }
  ```
  
  <details><summary><b>For Documentation Click Here <<</b></summary>

  ![image](https://user-images.githubusercontent.com/38674801/193678958-1f0cb729-02b3-487d-84e6-d17b82d78bda.png)
    ## click passanger and redirect to form login with validator
  ![image](https://user-images.githubusercontent.com/38674801/193679210-d5f2b255-c161-4e0a-bd90-438a2b9427d9.png)
  ## fill the form and click submit
  ![image](https://user-images.githubusercontent.com/38674801/193679303-25cf1907-7aca-473f-8e8d-2b16937e4c18.png)
  ![image](https://user-images.githubusercontent.com/38674801/193679329-e19725c4-189e-4719-bd30-778c9bf27ffa.png)
  ## passanger dashboard
  ![image](https://user-images.githubusercontent.com/38674801/193679387-7bef0786-9fcb-4acf-b3eb-0f71c8914206.png)
  ## logout button appear and click
  ![image](https://user-images.githubusercontent.com/38674801/193679508-6251bccd-80dd-4aa9-9826-75944362dd0a.png)
  ## redirect to home page
  ![image](https://user-images.githubusercontent.com/38674801/193679556-ca04833d-f7e0-488b-8440-7d487dd30ae7.png)

  </details>

  <details><summary><b>For schema DB Click Here <<</b></summary>

  ![image](https://user-images.githubusercontent.com/38674801/194594606-6e6d0a7f-fee7-4348-87fa-7086b636a0a6.png)
  </details>

  <details><summary><b>Add Form Registration (new)<<</b></summary>

  ![image](https://user-images.githubusercontent.com/38674801/194595146-85838a99-f28a-43cf-bc2c-df434b7ee228.png)
  </details>
  
- Article management used local db, to active it run code below in terminal
  ```sh
  npm run json-run
  ```
