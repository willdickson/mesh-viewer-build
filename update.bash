

# Clean files
set +e
echo "cleaning"
rm vite.svg
rm index.html
rm -r assets

echo "fetching new build from ${1}"
cp -r $1/* ./
set -e

