FROM gitpod/workspace-full:latest

# Install PostgreSQL
RUN sudo apt-get update \
    && sudo apt-get install -y postgresql postgresql-contrib

# Install NodeJS if not exist
RUN node -v >/dev/null 2>&1 || \
    (curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash - && \
     sudo apt-get install -y nodejs && \
     node -v && \
     npm -v)
    
# Set the default user and password for the PostgreSQL server
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=admin

# Expose the PostgreSQL port
EXPOSE 5432

# Start the PostgreSQL service when the container starts
CMD ["sudo", "-u", "postgres", "postgres", "-D", "/var/lib/postgresql/data", "-c", "config_file=/etc/postgresql/postgresql.conf"]
