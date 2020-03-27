# This is a Test project  
A test domainTenant resolve  with angular  
Issue  :  [Issue](https://github.com/abpframework/abp/issues/3304)  

# Tenant Environment 
Host :  [http:demo1.furthersoftware.com.tw](http:demo1.furthersoftware.com.tw)  
tenant  :  [http:tenant.demo1.furthersoftware.com.tw](http:tenant.demo1.furthersoftware.com.tw)  
tenant1 :  [http:tenant1.demo1.furthersoftware.com.tw](http:tenant1.demo1.furthersoftware.com.tw)  
account :  `admin`  pwd:`1q2w3E*`


# Server Environment Description  
 Deploy on `window server 2016` with `iis`  
 binding two domain name on iis    
 - demo1.furthersoftware.com.tw  
 - *.demo1.furthersoftware.com.tw  
 
 # Extra Actions
 This project is create by ABP CLI `Version 2.3.0`
 
 Install package for nuget:`Microsoft.AspNetCore.SpaServices.Extensions`
 
 Modify `DomainTenantTestHttpApiHostModule`:
 ``` csharp
             app.UseEndpoints(endPoints =>
            {
                endPoints.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}/{id?}");
            });
            //app.UseMvcWithDefaultRouteAndArea(); remove this
            app.Map("", app =>
            {
                app.UseSpa(spa =>
                {
                    spa.Options.SourcePath = "wwwroot/DomainTenantTest";
                    spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "DomainTenantTest"))
                    };
                });
            });
 ```
 
 angular prodcution code will at path `wwwroot/DomainTenantTest`  (we will have mutiple angular project.)
 
 
 




