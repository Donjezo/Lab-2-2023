using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

public class Startup
{
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddControllersWithViews();

        // Configure IdentityServer
        services.AddIdentityServer()
            .AddDeveloperSigningCredential() // For development purposes only
            .AddInMemoryClients(GetClients())
            .AddInMemoryIdentityResources(GetIdentityResources())
            .AddInMemoryApiResources(GetApiResources())
            .AddTestUsers(GetUsers()); // Use your own user store implementation instead

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.Authority = "https://localhost:5001"; // IdentityServer URL
            options.RequireHttpsMetadata = false; // For development purposes only
            options.Audience = "YourAPIName"; // Audience/Resource name of your API
            options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidIssuer = "https://localhost:5001", // IdentityServer URL
                ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("YourSigningKey")), // Replace with your own signing key
                ValidateAudience = true,
                    ValidAudience = "YourAPIName" // Audience/Resource name of your API
            };
            });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }

        app.UseStaticFiles();

        app.UseRouting();

        app.UseIdentityServer();

        app.UseAuthentication();
        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapDefaultControllerRoute();
        });
    }

    // Example method to retrieve client configurations
    private IEnumerable<Client> GetClients()
    {
        return new List<Client>
        {
            new Client
            {
                ClientId = "YourClientId",
                ClientSecrets = { new Secret("YourClientSecret".Sha256()) },
                AllowedGrantTypes = GrantTypes.ClientCredentials,
                AllowedScopes = { "YourAPIName" }
            }
        };
    }

    // Example method to retrieve identity resources
    private IEnumerable<IdentityResource> GetIdentityResources()
    {
        return new List<IdentityResource>
        {
            new IdentityResources.OpenId(),
            new IdentityResources.Profile()
        };
    }

    // Example method to retrieve API resources
    private IEnumerable<ApiResource> GetApiResources()
    {
        return new List<ApiResource>
        {
            new ApiResource("YourAPIName", "Your API Name")
        };
    }

    // Example method to retrieve test users
    private List<TestUser> GetUsers()
    {
        return new List<TestUser>
        {
            new TestUser
            {
                SubjectId = "1",
                Username = "alice",
                Password = "alice",
                Claims = new List<Claim>
                {
                    new Claim("name", "Alice"),
                    new Claim("email", "alice@example.com")
                }
            },
            new TestUser
            {
                SubjectId = "2",
                Username = "bob",
                Password = "bob",
                Claims = new List<Claim>
                {
                    new Claim("name", "Bob"),
                    new Claim("email", "bob@example.com")
                }
            }
        };
    }
}
