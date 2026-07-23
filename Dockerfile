node > 18
shell =
  .profile
.env =
  NODE_ENV=production

# Install dependencies
RUN npm ci --only=production

# Build the application
RUN npm run build

# Set up a non-root user
RUN useradd -m -u 1000 appuser
USER appuser

# Run the application
EXPOSE 3000
CMD ["npm", "run", "start"]
