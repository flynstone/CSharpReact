using CSharpReact.Data;
using CSharpReact.Infrastructure.Photos;
using CSharpReact.Infrastructure.Security;
using CSharpReact.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;

namespace CSharpReact.Api.Extensions
{
    public static class ServiceExtensions
    {
        // Configure Cross Origin Policies
        public static void ConfigureCors(this IServiceCollection services) =>
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy", builder =>
                builder.AllowAnyMethod()
                       .AllowAnyHeader()
                       .AllowCredentials()
                       .WithOrigins("http://localhost:3000"));
            });


        // Configure Swagger
        public static void ConfigureSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(s =>
            {
                s.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Web Api",
                    Version = "v1",
                    Description = "Blog with Asp.Net Core Web Api and React",
                    TermsOfService = new Uri("https://x-coreweb.com/terms-of-service"),
                    Contact = new OpenApiContact
                    {
                        Name = "Julien Lacroix",
                        Email = "flynstone@x-coreweb.com",
                        Url = new Uri("https://x-coreweb.com")
                    }
                });

                s.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Place to add JWT with Bearer",
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                s.AddSecurityRequirement(new OpenApiSecurityRequirement()
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            },
                            Name = "Bearer",
                        },
                        new List<string>()
                    }

                });
            });
        }

        public static void ConfigureScopes(this IServiceCollection services)
        {
            services.AddScoped<IUserAccessor, UserAccessor>();
            services.AddScoped<IPhotoAccessor, PhotoAccessor>();
            services.AddSignalR();
        }

        public static void ConfigureCloudinary(this IServiceCollection services, IConfiguration configuration)
        {
            services.Configure<CloudinarySettings>(configuration.GetSection("Cloudinary"));
        }

        // Configure SQL Server
        public static void ConfigureSqlContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AppDbContext>(opts =>
                opts.UseSqlServer(configuration.GetConnectionString("sqlConnection"), (b => b.MigrationsAssembly("CSharpReact.Data"))));
        }

    }
}
