from backend.app.Infra.db.clickhouse.connection import get_client
from config.logger import get_logger


logger = get_logger(__name__)

def fetch_data(query: str, params: dict = None):
    """
    Execute a SELECT query and return the results using clickhouse-connect.
    
    Args:
        query: SQL query to execute
        params: Query parameters for parameterized queries
        
    Returns:
        Tuple of (rows, columns)
        
    Raises:
        RuntimeError: If query execution fails
    """
    client = get_client()
    try:
        # Remove trailing semicolons to prevent multi-statement errors
        query = query.strip().rstrip(';')
        
        logger.debug(f"Executing ClickHouse query: {query}")
        
        # Execute the query with optional parameters
        result = client.query(query, parameters=params or {})
        
        # Extract the rows and column names from the QueryResult
        rows = result.result_rows
        columns = result.column_names
        
        logger.debug(f"Query executed successfully. Returned {len(rows)} rows.")
        
        return rows, columns
    except Exception as e:
        error_message = f"Query execution failed: {e}"
        logger.error(error_message)
        raise RuntimeError(error_message)
