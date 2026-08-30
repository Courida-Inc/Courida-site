# Organization Transfer Validation

The Courida-site repository transfer to Courida-Inc preserved the default branch, production deployment, domains, and rollback anchor.

This clean validation branch replaces the preserved, unmerged experimental PR #2 as the merge candidate. The security workflow installs a checksum-pinned scanner release, proves detection across three runtime-generated token categories, removes the temporary fixtures, and then scans full repository history.

No product behavior, production configuration, secrets, or deployment settings are changed.
