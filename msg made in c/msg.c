#include <windows.h>

int main() {
    LPCSTR message = "CUSTOM TEXT"; // MESSAGE
    LPCSTR title = "Hello World";   // TITLE
    UINT type = MB_ICONINFORMATION; // BUTTON AND ICON (48 + 0)

    // TIME 0 TO DON'T CLOSE
    MessageBoxA(NULL, message, title, type);

    return 0;
}