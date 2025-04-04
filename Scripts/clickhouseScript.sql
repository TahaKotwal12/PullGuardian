-- 📊 SCAN METRICS
CREATE TABLE scan_metrics (
    scan_id UUID,
    project_id UUID,
    language String,
    total_files UInt32,
    total_lines UInt32,
    issues_low UInt32,
    issues_medium UInt32,
    issues_high UInt32,
    issues_critical UInt32,
    duration_seconds Float32,
    scanned_at DateTime
)
ENGINE = MergeTree()
ORDER BY (project_id, scanned_at);
