FROM gitpod/workspace-full:latest

# Install PostgreSQL
RUN sudo apt-get update \
    && sudo apt-get install -y postgresql postgresql-contrib
    
USER postgres
RUN echo "local all postgres trust" > /etc/postgresql/12/main/pg_hba.conf

RUN node -v >/dev/null 2>&1 || \
    (curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - && \
     sudo apt-get install -y nodejs && \
     node -v && \
     npm -v)

# Install nvm (Node Version Manager)
#RUN command -v nvm || (curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash)

# Install Node.js 16.19.1 using nvm
#RUN /bin/bash -c "source $HOME/.nvm/nvm.sh && nvm install 16.19.1 && nvm use 16.19.1"
    
# Set the default user and password for the PostgreSQL server
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=admin

# Expose the PostgreSQL port
EXPOSE 5432

# Start the PostgreSQL service when the container starts
CMD ["sudo", "-u", "postgres", "postgres", "-D", "/var/lib/postgresql/data", "-c", "config_file=/etc/postgresql/postgresql.conf"]
