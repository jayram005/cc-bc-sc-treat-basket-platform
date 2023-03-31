FROM gitpod/workspace-full:latest

# Install PostgreSQL
RUN sudo apt-get update \
    && sudo apt-get install -y postgresql postgresql-contrib

# Install nvm (Node Version Manager)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Install Node.js 16.19.1 using nvm
RUN /bin/bash -c "source $HOME/.nvm/nvm.sh && nvm install 16.19.1 && nvm use 16.19.1"
    
# Set the default user and password for the PostgreSQL server
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=admin

# Create a new database called 'mydb'
RUN sudo PGPASSWORD=admin createdb -U postgres codechallenge

# Expose the PostgreSQL port
EXPOSE 5432

# Start the PostgreSQL service when the container starts
CMD ["sudo", "-u", "postgres", "postgres", "-D", "/var/lib/postgresql/data", "-c", "config_file=/etc/postgresql/postgresql.conf"]